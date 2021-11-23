import React from 'react';

const Contact = () => {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Solicitud de servicio</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="inputName">Nombre</label>
                                <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Ingresa tu nombre" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu informacion con nadie.</small>
                            </div>
                            <div class="form-group">
                                <label for="menssageInput">Mensaje</label>
                                <textarea type="textarea" class="form-control" id="menssageInput" aria-describedby="emailHelp" placeholder="Ingresa tu mensaje" />
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                 </form>
            </div>
            </div>
            </div>
            </div>

    )

}

export default Contact