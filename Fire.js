import firebase from 'firebase'; 
class Fire {

    // Constructor
    constructor() {
      this.init();
      this.observeAuth();
    }

    // Initialiser
    init = () =>
    firebase.initializeApp({
    apiKey: 'AIzaSyAOhZPPM8ADecxz6_UJ98fYQSUDr89q0do',
    authDomain: 'flockchain-8a408.firebaseapp.com',
    databaseURL: 'https://flockchain-8a408.firebaseio.com',
    projectId: 'flockchain-8a408',
    storageBucket: '',
    messagingSenderId: '782727783903',
    });

    // Authorisasor
    observeAuth = () =>
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
      if (!user) {
        try {
          // 4.
          firebase.auth().signInAnonymously();
        } catch ({ message }) {
          alert(message);
        }
      }
    };


    // DB ref
    get ref() {
    return firebase.database().ref('messages');
    }
    
    // Subscribe to message
    on = callback => this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));

    // Parsing function
    parse = snapshot => {
        // 1.
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        // 2.
        const timestamp = new Date(numberStamp);
        // 3.
        const message = {
          _id,
          timestamp,
          text,
          user,
        };
       return message;
      };
    // Unsubscribe
    off() {
        this.ref.off();
    }
    // 1.
    get uid() {
    return (firebase.auth().currentUser || {}).uid;
    }
    // 2.
    get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
    }

    // 3.
    send = messages => {
    for (let i = 0; i < messages.length; i++) {
        const { text, user } = messages[i];
        // 4.
        const message = {
        text,
        user,
        timestamp: this.timestamp,
        };
        this.append(message);
    }
    };
    // 5.
    append = message => this.ref.push(message);



}

Fire.shared = new Fire();
export default Fire;