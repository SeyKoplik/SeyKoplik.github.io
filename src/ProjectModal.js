import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ProjectModal(props) {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <div className="card">
                <Button color="warning" onClick={toggle}>
                    <img src={props.demo_img} alt={props.demo_img} />
                </Button>

                <Modal isOpen={modal} toggle={toggle} className={className}>
                    {/* <div className="card-body"> */}
                    <ModalHeader toggle={toggle}>
                        {props.title}
                    </ModalHeader>

                    <ModalBody>
                        <p>{props.description}</p>
                    </ModalBody>

                    <ModalFooter>
                    <Button className="repoButton">
                    <a href={props.repo_url} target="_blank">Repository</a>
                    </Button>
                        {' '}
                    <Button className="deployButton"><a href={props.deployed_url} target="_blank">Deployed</a>
                    </Button>
                    </ModalFooter>

                </Modal>
                {/* </div> */}
            </div>
        </>
    );
}

export default ProjectModal;