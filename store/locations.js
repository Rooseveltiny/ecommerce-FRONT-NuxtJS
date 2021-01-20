const actions = {}
const mutations = {
    showSelectWindow(state, status = undefined) {
        state.shownUpSelectWindow = (status == undefined) ? true : status;
        state.searchString = "";
    },
    setCurrentCity(state, city) {
        localStorage.setItem('currentCity', JSON.stringify(city))
        state.currentCity = city
    },
    setSearchString(state, value) {
        state.searchString = value
    }
}
const state = function () {
    return {
        fullList: [{ name: "Череповец" }, { name: "Москва" }, { name: "Вологда" }, { name: "Санкт-Петербург" }],
        shownUpSelectWindow: false,
        currentCity: { name: "Череповец" },
        searchString: ""
    }
}
const getters = {
    getFullList(state) {
        if (state.searchString) {
            return state.fullList.filter((loc) => {
                return loc.name.toLowerCase().includes(state.searchString.toLowerCase())
            })
        } else {
            return state.fullList
        }
    },
    getShownUpSelectWindow(state) {
        return state.shownUpSelectWindow
    },
    getCurrentCity(state) {
        return state.currentCity
    },
    getSearchString(state) {
        return state.searchString
    }
}


export default { actions, mutations, state, getters }