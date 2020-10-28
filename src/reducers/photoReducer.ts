import {deletePhoto} from "services/jsonServer";
import photoState from "states/photoState";

//* initial state
// const photoInStorage: PhotoModel[] = JSON.parse(getStorage("photos") ?? JSON.stringify(photos));

const initialState: photoState = {
	list: [],
};

const photoReducer = (state: photoState = initialState, action: any) => {
	switch (action.type) {
		case "SET_PHOTOS": {
			return {
				list: action.payload,
			};
		}
		case "ADD_PHOTO": {
			const newList = [...state.list];
			newList.push(action.payload);

			return {
				...state,
				list: newList,
			};
		}

		case "REMOVE_PHOTO": {
			const newList = state.list;
			const index = newList.findIndex((listItem) => listItem.id === action.payload.id);

			if (newList[index].password === action.payload.password) {
				deletePhoto(action.payload.id);
				newList.splice(index, 1);
				return {
					...state,
					list: newList,
				};
			} else return state;
		}

		default:
			return state;
	}
};

export default photoReducer;
