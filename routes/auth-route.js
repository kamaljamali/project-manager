"use strict";

const LoginValidator = use("back-end/validation/login-validator");

/* Get Home router */
const router = Router.router("auth");

router.get("/login", [global.limiter, "auth@login"], "auth.login");
router.post(
    "/attempt",
    [LoginValidator.validate(), "auth@attempt"],
    "auth.attempt"
);
router.get("/logout", "auth@logout", "auth.logout");
