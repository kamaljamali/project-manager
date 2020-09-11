'use strict';

/* Get Home router */
const router = Router.router();

router.get('/project', 'project@index', 'project.index');
router.post('/project', 'project@store', 'project.store');
router.get('/api/project/data', 'project@loadData', 'api.project.data');
router.delete('/api/project/delete/:id', 'project@deleteProject', 'api.project.delete');


router.get('/project/task/:projectId', 'task@index', 'project.task.index');
router.post('/task', 'task@store', 'task.store');
router.get('/api/project/task/:projectId/:employeeId', 'task@loadTask', 'api.project.task.data');
router.delete('/api/task/delete/:id', 'task@deleteTask', 'api.task.delete');

router.post('/employee', 'employee@store', 'employee.store');
router.get('/employee', 'employee@index', 'employee.index');
router.get('/api/employee/data', 'employee@loadData', 'api.employee.data');
router.delete('/api/employee/delete/:id', 'employee@deleteEmployee', 'api.employee.delete');

router.get('/project/gantt-chart', 'gantt-chart@index', 'project.gantt-chart');
