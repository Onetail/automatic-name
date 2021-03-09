import NameService from './service/name';

export default class Route extends Log {
  constructor() {
    super();
    this.nameService = new NameService();
  }

  /**  testing API and controller */
  async testService() {
    try {
      this.nameService.run();
    } catch (e) {
      console.error(e);
    }
  }

  /*************************************** */
}
