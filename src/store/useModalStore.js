import {create} from 'zustand'

const useModalStore = create((set) => ({
	alertModalData: {},
	
	actions: {
		setAlertModalData: (data) => set({alertModalData: data})
	}
}))

export const useAlertModalData = () => useModalStore(state => state.alertModalData)

export const useModalStoreActions = () => useModalStore(state => state.actions)
