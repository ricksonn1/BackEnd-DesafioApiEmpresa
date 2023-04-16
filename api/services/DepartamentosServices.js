const Services = require('./Services.js')
const database = require('../models/index.js')

class DepartamentosServices extends Services {
    constructor() {
        super('Departamentos')
    }

}

module.exports = DepartamentosServices