const NameService = require('./app/service/name');

class Index {
  constructor() {
    this.nameService = new NameService();
    this.nameService.createNewName();
  }

  async createNewName(...languages) {
    return await this.nameService.createNewName(...languages);
  }

  getSpacing() {
    return this.nameService.getSpacing();
  }
  setSpacing(spacing) {
    this.nameService.setSpacing(spacing);
  }

  getUsername() {
    return this.nameService.getUsername();
  }

  getFullname(spacing) {
    this.spacing = spacing || this.spacing;
    return `${this.firstname}${this.spacing}${this.lastname}`;
  }

  async getUsernameWithTag(type, ...params) {
    return await this.nameService.getUsernameWithTag(type, ...params);
  }

  async getFullnameWithTag(type, ...params) {
    return await this.nameService.getFullnameWithTag(type, ...params);
  }
}

module.exports = Index;
