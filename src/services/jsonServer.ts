import {useState} from "react";
import axios from "axios";
import PhotoModel from "models/PhotoModel";

// const url = "http://localhost:3001/photos/";
const url = "https://my-unplash-server.herokuapp.com/photos";

export const useJsonServer = () => {
	const [photos, setPhotos] = useState<string>("");
	axios
		.get(url)
		.then((res) => {
			setPhotos(JSON.stringify(res.data));
		})
		.catch((err) => console.log(err));

	return photos;
};

export const postPhoto = (photo: PhotoModel) => {
	axios.post(url, {
		id: photo.id,
		label: photo.label,
		url: photo.url,
		password: photo.password,
	});
};

export const deletePhoto = (id: number) => {
	axios.delete(`${url}/${id}`);
};
