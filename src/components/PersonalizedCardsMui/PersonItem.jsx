import React from 'react';
import { useState } from 'react';
import '@styles/PersonalizedCardsMui/PersonItem.scss';
import { Table, TableRow, TableCell } from '@mui/material';
import foto from '@images/foto.png';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


const PersonItem = ({ row }) => {
	
const [mask, letMask] = useState('mask1');
const [maskBorder, letMaskBorder] = useState('maskBorder1');

const handleMask = () =>{
	if (mask == 'mask1'){
		letMask('mask2');
		letMaskBorder('maskBorder2');
	}
	if (mask == 'mask2'){
		letMask('mask3');
		letMaskBorder('maskBorder3');
	}
	if (mask == 'mask3'){
		letMask('mask1');
		letMaskBorder('maskBorder1');
	}
	
}
	return (
		<Card sx={{margin: "5px"}} id={"card"+row.id}>
			<div className={maskBorder}>
				<img className={mask}></img>
			</div>
			<div className="contenido">
				<div className="headerCard">
					<div className="fotoPerfil">
						<img src={foto} alt="Foto de frente de directivo" width="100%" height="100%"></img>
					</div>
					<div className="jerarquiaypromedio">
						<p className="jerarquia">Jerarquía<br /><span>{row.jerarquia}</span></p>
						<div className="borderCard"></div>
						<p className="promedio">Promedio<br /><span className="promedioValor">{row.promedio}</span></p>
					</div>
				</div>
				<div className="bodyCard">
					<h5 className="nomyape">{row.nomyape}</h5>
					<div className="borderCard"></div>
					<table className="especificacion">
						<tbody>
						<tr>
							<td className='especificacionParametro'>DECISIÓN</td>
							<td className='especificacionValor'>--</td>
						</tr>
						<tr>
							<td className='especificacionParametro'>PLANIFICACION</td>
							<td className='especificacionValor'>--</td>
						</tr>
						<tr>
							<td className='especificacionParametro'>CONDUCCION</td>
							<td className='especificacionValor'>--</td>
						</tr>
						<tr>
							<td className='especificacionParametro'>KNOW HOW</td>
							<td className='especificacionValor'>--</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<br/>
			<Button sx={{marginLeft: '50px'}} variant='outlined' id='button' onClick={handleMask}>Botón CAMBIO MASCARA</Button>
		</Card>	
	);
}

export default PersonItem;
