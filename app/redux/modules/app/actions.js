import { actionCreator, createRequestTypes } from 'Redux/helpers'

export const LOAD_TEST = 'LOAD_TEST'
export const loadTest = () => actionCreator(LOAD_TEST, {})

