import { asyncActionStart, asyncActionFinish, asyncActionError } from './../async/asyncActions';
//import { AsyncAction } from './../async/asyncConstants';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { toastr } from "react-redux-toastr";
import { getFirebase } from "react-redux-firebase";


export const updateProfileAction: ActionCreator<ThunkAction<
  Promise<void>,
  any,
  void,
  AnyAction
>> = (user: any) => {
  return async (): Promise<void> => {
    try {
      const firebase = getFirebase();
      const { isLoaded, isEmpty, ...updatedUser } = user;
      await firebase.updateProfile(updatedUser);
      toastr.success("Success", "Your profile has been updated");
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadPhotos: ActionCreator<ThunkAction<
  Promise<void>,
  any,
  void,
  AnyAction
>> = (file: any, fileName: string) => {
  return async (
    dispatch: ThunkDispatch<any, void, AnyAction>
  ): Promise<void> => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const user = firebase.auth().currentUser;
    const path = `${user?.uid}/user_images`;
    const options = {
      name: fileName,
    };
    try {
      dispatch(asyncActionStart({loading:true}))
      //1:- upload a file to firebase storage
      let uploadedFile = await firebase.uploadFile(
        path,
        file,
        undefined,
        options
      );
      //2:get url of the image
      let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
      //3  get userdoc
      //let userDoc = await firebase.firestore().get(`users/${user?.uid}`);

      let userDoc = await firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .get();
      //4 check if user has photo , if not update the profile
      if (!userDoc.data()?.photoURL) {
        await firebase.updateProfile({
          photoURL: downloadURL,
        });
        await user?.updateProfile({
          photoURL: downloadURL,
        });
      }
      //5 add the image to photo
      await firestore.add({
        collection: "users",
        doc: user?.uid,
        subcollections: [{ collection: "photos" }],
      },{
        name:fileName,
        url:downloadURL
      });
      dispatch(asyncActionFinish({loading:false}))
      
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError({loading:false}))
    }
  };
};
