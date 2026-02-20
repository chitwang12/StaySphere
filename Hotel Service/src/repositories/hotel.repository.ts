import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address, 
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount
    });

    logger.info(`Hotel created with id: ${hotel.id}`);
    
    return hotel;
}


export async function getHotelById(id:number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel){
        logger.error(`Hotel not found : ${id}`);
        throw new NotFoundError(`Hotel with id ${id} not found`);
    }


    logger.info(`Hotel found : ${hotel.id}`);

    return hotel;
}

export async function getAllHotels(){
    const hotel = await Hotel.findAll({
        where: {
            deleted_at: null
        }
    });
    if(!hotel){
        logger.error(`No hotels found`);
        throw new NotFoundError(`No hotels found`);
    }

    logger.info(`Hotels found : ${hotel.length}`);
    return hotel;
}

export async function softDeleteHotel(id: number) {
   const hotel = await Hotel.findByPk(id);

   if(!hotel){
    logger.error(`Hotel not found : ${id}`);
    throw new NotFoundError(`Hotel with id ${id} not found`);
   }

   hotel.deleted_at = new Date();
   await hotel.save();
   logger.info(`Hotel soft deleted in database: ${hotel.id}`);
   return hotel;
}
