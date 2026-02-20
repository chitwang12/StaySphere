import express from 'express';
import { createHotelHandler, getHotelByIdHandler,getAllHotelsHandler, deleteHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator'

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema), createHotelHandler); // TODO: Resolve this TS compilation issue

hotelRouter.get('/:id', getHotelByIdHandler);

hotelRouter.get('/', getAllHotelsHandler);

hotelRouter.delete('/:id', deleteHotelHandler);
export default hotelRouter;