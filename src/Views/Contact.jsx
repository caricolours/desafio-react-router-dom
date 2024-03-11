import React from 'react'

const Contact = () => {
    return (
        <div className='mt-5 p-5'>
            <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
            <form>
                <div class="form-group mt-5">
                    <label for="exampleFormControlInput1">Correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripción</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <button type="submit" class="btn btn-danger mt-3">Enviar</button>
        </div>
    )
}

export default Contact