import {initialState, userReducer} from './reducer';

discribe('userReducer', ()=>{
    it("вызов userReducer без action вернет initialState", ()=>{
        const result = userReducer();
        expect(result).toEqual(initialState) 
    })
})

