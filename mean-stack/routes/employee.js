const router = require("express").Router();
const Employee = require("../models/employee");
const path = require("path");
router.post("/saveEmployeeData", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  try {
    const saveEmployee = await employee.save();
    res.send(saveEmployee);
    console.log(saveEmployee);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getEmployee", async (req, res) => {
  try {
    const getEmployee = await Employee.find();
    res.json(getEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/editEmployeeData", async (req, res) => {
  try {
    const employee = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    };
    const updatedEmployee = await Employee.findAndModify(
      { _id: req.params.employeeId },
      employee
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});
/// get single employee
router.get("/getEmployeeId", async (req, res) => {
  console.log("get single data", req.body);
  try {
    const getEmployee = await Employee.findByID(req.params.getEmployeeId);
    res.json(getEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
