'use strict';

const Mongoose = require('mongoose');

/**
 * Model class
 */
function Model() { }
module.exports = Model;

/**
 * Initialize model
 */
Model.init = function init() {
    const modelName = 'Project';

    return new Promise((resolve, reject) => {
        const model = Mongoose.model(modelName, Model.getSchema());

        resolve({
            name: modelName,
            model
        });
    })
};

/**
 * Model schema
 */
Model.getSchema = function getSchema() {
    return new Mongoose.Schema({
        ID: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },
        start: {
            type: Date,
            required: true
        },
        appointedTime: {
            type: Date,
            default: null
        },
        finishTime: {
            type: Date,
            default: null
        },
    }, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });
};
