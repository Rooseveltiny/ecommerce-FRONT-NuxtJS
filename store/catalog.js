// import router from '../../router/router'
import ApiSettings from './ApiSettings'

export default {
    actions: {
        async fetchProducts({ commit }) {
            commit('updateShowCatalogBlock', true);
            const categoryAndQueryParams = this.app.router.currentRoute.fullPath;
            const res = await fetch(`${ApiSettings.BASE_ROUTE}${categoryAndQueryParams}`);
            const products = await res.json();
            commit('updateProducts', products);
            commit('updateShowCatalogBlock', false);
        },
        async fetchFilter({ commit }) {
            const res = await fetch(`${ApiSettings.BASE_ROUTE}/products/filter/${router.currentRoute.params.slug}`);
            const filter = await res.json();
            commit('updateFilter', filter);
        },
        async fetchCatalogStructure({ commit }) {
            const res = await fetch(`${ApiSettings.BASE_ROUTE}/catalog_structure`);
            const categories = await res.json();
            commit('updateCategories', categories);
        },
        setQueryParams({ getters }) {
            let queryObj = Object();
            let allChoosen = getters.getAllChoosenFilterParameters;
            for (let filterItem of allChoosen) {
                let nameOfValue = filterItem['detail_group'].slug;
                let choosenValues = [];
                allChoosen.forEach(value => {
                    if (value['detail_group'].slug == nameOfValue) {
                        choosenValues.push(value['slug']);
                    }
                })
                queryObj[nameOfValue] = choosenValues;
            }
            queryObj['sort_field'] = getters.getCurrentSortingType.sort_field;
            queryObj['page'] = 1;
            router.replace({ query: queryObj }).catch(() => { });
        }
    },
    mutations: {
        updateSortingCatalog(state, sorting) {
            state.sorting.currentSorting = sorting;
        },
        updateSortingFromURL(state) {
            let sortFieldFromURL = router.currentRoute.query.sort_field;
            let sortingType = state.sorting.sortingTypes.find(value => {
                return value.sort_field == sortFieldFromURL;
            })
            if (sortingType) {
                state.sorting.currentSorting = sortingType;
            }
        },
        updateProducts(state, products) {
            state.products.productsList = products.results;
            state.products.productsPagination = products;
        },
        updateShowCatalogBlock(state, show) {
            state.products.showLoadingBlock = show;
        },
        updateCategories(state, categories) {
            state.categories = categories;
            state.currentCategory = categories[0]
        },
        closeCatalogStructure(state){
            state.CatalogStructureVisible = false;
        },
        openCloseCatalogStructureGeneral(state) {
            let el = event.srcElement.id;
            if (el == "CatalogStructure") {
                state.CatalogStructureVisible = !state.CatalogStructureVisible;
            }
        },
        updateFilter(state, filter) {
            state.filters = filter;
        },
        collectFilterValuesFromURL(state) {
            let allValuesFromURL = router.currentRoute.query;
            delete allValuesFromURL.page;
            delete allValuesFromURL.sort_field;

            let allValuesArray = [];
            for (let element of Object.values(allValuesFromURL)) {
                if (Array.isArray(element)) {
                    allValuesArray = allValuesArray.concat(element);
                } else {
                    allValuesArray.push(element);
                }
            }
            let allFilterValuesArray = [];
            for (let element of state.filters) {
                allFilterValuesArray = allFilterValuesArray.concat(element.parameters);
            }
            let allChoosenFilterValues = allFilterValuesArray.filter(value => {
                for (let chooseVal of allValuesArray) {
                    if (chooseVal == value.slug) {
                        return true;
                    }
                }
                return false;
            })
            state.choosenFilterParameters = allChoosenFilterValues;
        },
        clearFilterParams(state) {
            state.choosenFilterParameters = []
        },
        changeCurrentCategory(state, currentCategory) {
            state.currentCategory = currentCategory;
        }
    },
    state() {
        return {
            sorting: {
                sortingTypes: [
                    {
                        name: 'по возрастанию цены',
                        sort_field: 'price'
                    },
                    {
                        name: "по убыванию цены",
                        sort_field: '-price'
                    },
                    {
                        name: "по наименованию",
                        sort_field: 'title'
                    },
                    {
                        name: "по умолчанию",
                        sort_field: 'link'
                    }
                ],
                currentSorting: {
                    name: 'по умолчанию',
                    sort_field: 'link'
                }
            },
            catalogView: {
                //// in future
            },
            products: {
                productsList: [],
                productsPagination: {},
                showLoadingBlock: false
            },
            categories: {},
            CatalogStructureVisible: false,
            currentCategory: {
                title: "Нет выбрано"
            },
            filters: [],
            choosenFilterParameters: [],
        }
    },
    getters: {
        getCurrentSortingType(state) {
            return state.sorting.currentSorting;
        },
        getAllSortingTypes(state) {
            let sortings = state.sorting.sortingTypes.slice();
            let currentSortingIndex = state.sorting.sortingTypes.findIndex(item => {
                return item.name === state.sorting.currentSorting.name;
            })
            sortings.splice(currentSortingIndex, 1);
            return sortings;
        },
        getProducts(state) {
            return state.products.productsList;
        },
        catalogLoadingBlock(state) {
            return !state.products.showLoadingBlock;
        },
        getCatalogStructureVision(state) {
            return state.CatalogStructureVisible;
        },
        getAllFilters(state) {
            return state.filters;
        },
        getAllChoosenFilterParameters(state) {
            return state.choosenFilterParameters;
        },
        getCategories(state) {
            return state.categories;
        },
        getPagination(state) {
            let pag = state.products.productsPagination;
            if (pag.next) { pag.next = pag.next.replace(ApiSettings.BASE_ROUTE, '') }
            if (pag.previous) { pag.previous = pag.previous.replace(ApiSettings.BASE_ROUTE, '') }
            if (pag.page_links) { pag.page_links.map(value => { value.link = value.link.replace(ApiSettings.BASE_ROUTE, '') }); }
            return pag;
        },
        getProductsCount(state) {
            return state.products.productsPagination.count;
        },
        getCurrentCategory(state) {
            return state.currentCategory;
        }
    }
}