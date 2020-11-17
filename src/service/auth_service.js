import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  } //firebase 문서에 나와있다!
  // 다른부분은 똑같은데 provider이름만 달라서 ${}로 설정해둠!

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  } //콜백을 통해 매번 체크를 해준다. 로그인됐는지 아닌지!
  //onAuthStateChanged에서 유저검사를하고.. 있다면 내용을 user에 담아서 인자로 받은함수의
  //파라미터로 정보를 준다.
  //login.jsx에서 useEffect를 통해 onAuthChange가 함수를 받아 오는데.. 그함수는 다시
  // user가 있으면 goToMaker를 발동시킨다

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
