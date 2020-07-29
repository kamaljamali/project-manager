'use strict'

const ValidatorJS = require('validatorjs');

/**
 * Validator
 */
function Validator() { }
module.exports = Validator;

/**
 * Validate
 * @param {Object} customValidator customValidatort
 */
Validator.validate = function validate(customValidator) {
    return (req, res, next) => {
        let data = {};
        let rules = {};
        let messages = {};
        let attributes = {};
        let lang = req.lang || 'en';

        /* Preparation */
        if (customValidator.data) {
            data = customValidator.data(req);
        }

        if (customValidator.rules) {
            rules = customValidator.rules(req);
        }

        if (customValidator.messages) {
            messages = customValidator.messages(req);
        }

        if (customValidator.attributes) {
            attributes = customValidator.attributes(req);
        }

        /* Setup language */
        if (null != customValidator.lang) {
            lang = customValidator.lang();
        }
        ValidatorJS.useLang(lang);

        /* Make a new instance */
        const validator = new ValidatorJS(data, rules, messages);

        /* Set attribute name */
        const attributeNames = {};
        Object.keys(attributes)
            .forEach(key => attributeNames[key] = attributes[key]);
        validator.setAttributeNames(attributes);

        /* Validate */
        const passes = validator.passes();

        if (passes) {
            next();
        } else {
            const errors = Validator.generateErrors(validator);

            res.status(400)
                .send(errors)
                .end();
        }
    };
};

/**
 * Generate errors list
 */
Validator.generateErrors = function generateErrors(validator) {
    const allErrors = validator.errors.all();

    /* All errors */
    const errors = [];
    Object.keys(allErrors)
        .forEach(key => {
            errors.push(allErrors[key].join('\n'));
        });

    return errors.join('\n');
};
