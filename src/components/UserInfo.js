class UserInfo {
    constructor({ name: profileName, about: profileJob }) {
        this._profileName = document.querySelector(profileName);
        this._profileJob = document.querySelector(profileJob);
    }

    getUserInfo() {
        const dataProfile = {};

        dataProfile.name = this._profileName.textContent;
        dataProfile.about = this._profileJob.textContent;

        return (dataProfile);

    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileJob.textContent = data.about;
    }
}

export default UserInfo; 