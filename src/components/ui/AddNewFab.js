import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/uiAction';
import { eventClearActiveEvent } from '../../actions/eventsAction';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleAddClick = () => {
        dispatch(eventClearActiveEvent());
        dispatch(uiOpenModal());
    }
    return (
        <button
            onClick={handleAddClick}
            className="btn btn-primary fab"
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
