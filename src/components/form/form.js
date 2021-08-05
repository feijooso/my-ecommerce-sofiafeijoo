import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './form.css';

const FormComponent = ({ addOrder }) => {
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
					/>
					<input
						placeholder='Telefono'
						onChange={handleOnChange}
						name='telefono'
						value={values.telefono}
					/>
					<input
						placeholder='Mail'
						onChange={handleOnChange}
						name='mail'
						value={values.mail}
					/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</Grid>
	);
};

export default FormComponent;