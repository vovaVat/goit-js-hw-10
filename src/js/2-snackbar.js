// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form= document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay= form.delay.value;
    const state= document.querySelector('input[name="state"]:checked');
    if(state){
        if (state.value === "fulfilled"){
            makePromise(`✅Fulfilled promise in ${delay}ms`, delay).then(value => iziToast.success({
                message: value,
            }));
        }
        else {
            makePromise(`❌ Rejected promise in ${delay}ms`
, delay, false).then(value => iziToast.success({
                message: value,
            })).catch(error => iziToast.error({
                message: error,
            }));
        }
    }
});

function makePromise(value ,delay, shouldResolve = true){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(shouldResolve){
                resolve(value)
            }
            else{
                reject(value)
            }
        }, delay);
    });
}