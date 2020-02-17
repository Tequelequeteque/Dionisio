import { CREATED, NO_CONTENT } from 'http-status-codes';
import Drink from '../models/Drink';

class DrinkController {
  async index(request, response) {
    return response.json(await Drink.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await Drink.findByPk(id));
  }

  async store(request, response) {
    const { name, apu, price } = request.body;
    const drink = await Drink.create({ name, apu, price });
    return response.status(CREATED).json(drink);
  }

  async update(request, response) {
    const { id, name, apu, price } = request.body;
    const newAttributes = { name, apu, price };
    const drink = await Drink.findByPk(id);
    drink.setAttributes(newAttributes);
    return response.json(await drink.save());
  }

  async delete(request, response) {
    const { id } = request.params;
    Drink.destroy({ where: { id } });
    return response.status(NO_CONTENT).send();
  }
}

export default new DrinkController();
