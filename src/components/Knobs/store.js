export default {
    // inherits the namespace from parent module
    knobs: {
        namespaced: true,
        state: {
            inIsolation: false,
            isolationMode: 'blur',
            disabled: false,
            visible: false
        },
        mutations: {
            setIsolationMode(state, payload) {
                state.isolationMode = payload
            },
            setIsolation(state, payload) {
                state.inIsolation = payload
            },
            setDisabled(state, payload) {
                state.disabled = payload
            },
            toggleVisibility(state) {
                state.visible = !state.visible
            },
            setVisibility(state, bool) {
                state.visible = bool
            }
        },
        getters: {
            inIsolation: state => state.inIsolation,
            isolationMode: state => state.isolationMode,
            disabled: state => state.disabled,
            visible: state => state.visible
        }
    },
}