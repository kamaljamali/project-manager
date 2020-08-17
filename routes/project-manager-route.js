'use strict';

/* Get Home router */
const router = Router.router();

router.get('/project', 'project@index', 'project.index');
router.get('/project2', 'project@index2', 'project.index2');
router.get('/employee', 'employee@index', 'employee.index');
router.get('/project/task/:projectId', 'task@index', 'project.task.index');
