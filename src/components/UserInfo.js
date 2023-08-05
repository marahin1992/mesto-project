class UserInfo {
    constructor({ name: profileName, about: profileJob }) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    }

    getUserInfo() {
        const dataProfile = {};

        const name = document.querySelector(this._profileName).textContent;
        const about = document.querySelector(this._profileJob).textContent;
        dataProfile.name = name;
        dataProfile.about = about;

        return (dataProfile);

    }

    setUserInfo(data) {
        document.querySelector(this._profileName).textContent = data.name;
        document.querySelector(this._profileJob).textContent = data.about;
    }
}

export default UserInfo; 