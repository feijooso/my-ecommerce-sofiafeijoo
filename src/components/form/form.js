import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useCartContext } from '../../context/cartContext';
import './form.css';

const FormComponent = ({ addOrder }) => {
	const {clearCart} = useCartContext();

	const initialState = {
        nombre: '',
        telefono:'',
        mail:'',
	};

	const [values, setValues] = useState(initialState);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addOrder(values);
		setValues({ ...initialState });
		clearCart();
	};

	return (
		<Grid item xs={12} container direction="row" justify="center" alignItems="center">
			<div className='form-container'>
				<form onSubmit={handleOnSubmit}>
					<input
						placeholder='Nombre'
						onChange={handleOnChange}
						name='nombre'
						value={values.nombre}
						required
					/>
					<input
						placeholder='Telefono'
						onChange={handleOnChange}
						name='telefono'
						value={values.telefono}
						required
					/>
					<input
						placeholder='Mail'
						onChange={handleOnChange}
						name='mail'
						value={values.mail}
						required
					/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</Grid>
	);
};

export default FormComponent;