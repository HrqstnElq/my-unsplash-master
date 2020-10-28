import PhotoModel from "models/PhotoModel";

export const setPhotos = (photos: PhotoModel[]) => {
	return {
		type: "SET_PHOTOS",
		payload: photos,
	};
};

export const addPhoto = (photo: PhotoModel) => {
	return {
		type: "ADD_PHOTO",
		payload: photo,
	};
};

export const removePhoto = (idPhoto: number, password: string) => {
	return {
		type: "REMOVE_PHOTO",
		payload: {id: idPhoto, password: password},
	};
};
