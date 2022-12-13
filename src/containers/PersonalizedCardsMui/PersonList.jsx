import * as React from 'react';
import useGetPersons from '@hooks/useGetPersons';
import PersonItem from '@components/PersonalizedCardsMui/PersonItem';
import '@styles/PersonalizedCardsMui/PersonList.scss';
import data from '@db/data.json'

import ErrorAlert from '@components/PersonalizedCardsMui/ErrorAlert';
import SuccessAlert from '@components/PersonalizedCardsMui/SuccessAlert';

import PropTypes, { node } from 'prop-types';
//Material Desing
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { display, width } from '@mui/system';

//styles MUI
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const Root = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.up('xs')]: {
		display: "flex",
		paddingBottom: 40,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	[theme.breakpoints.up('sm')]: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		paddingBottom: 40,
	},
	[theme.breakpoints.up('md')]: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		paddingBottom: 40,
	},
	[theme.breakpoints.up('lg')]: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		paddingBottom: 40,
	},
	[theme.breakpoints.up('xl')]: {
		display: "grid",
		gridTemplateColumns: "repeat(5, 1fr)",
		paddingBottom: 40,
	},
}));


////////////Colocar aqui la API GET //////////
/* const API = 'http://localhost:3000/getposts'; */

//TablePagination
function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5, width: 'max-content' }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

//PersonList
const PersonList = () => {

	////////// DATOS DINAMICOS DESDE BASE DE DATOS PREDEFINIDA //////////
	/*const persons = useGetPersons(API);
	//Llamada y declaracion de productos
	function createData(id, nomyape, jerarquia, image, promedio) {
		return { id, nomyape, jerarquia, image, promedio };
	}
	const rows = [];
	{
		persons.map(person => (
			rows.push(createData(person.id, person.nomyape, person.jerarquia, person.image, person.promedio))
		))
	};*/
	//////////////////////////////////////////////////////////////////////
	////////// DATOS ESTATICOS DESDE BASE DE DATOS LOCAL //////////
	const rows = data.directivos;
	//////////////////////////////////////////////////////////////////////

	//React state y calculo por hoja
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	// Evita un salto de diseño al llegar a la última página con filas vacías
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<section>
				<Paper elevation={3} sx={{ borderRadius: 5 }}>
					<Root>
						{(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map((row) => (
							// Llamada de component
							<PersonItem key={row.id} row={row}></PersonItem>
						))}
						{/*{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}*/}
					</Root>
					<TableContainer>
						<Table>
							<TableFooter>
								<TableRow>
									{/*TABLEPAGINATION*/}
									<TablePagination
										className='tablePaginationFooter'
										rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
										colSpan={5}
										count={rows.length}
										rowsPerPage={rowsPerPage}
										page={page}
										SelectProps={{
											inputProps: {
												'aria-label': 'rows per page',
											},
											native: true,
										}}
										onPageChange={handleChangePage}
										onRowsPerPageChange={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</TableContainer>
				</Paper>
			</section >
			<Box id='errorBoxPr' style={{ display: 'none' }}>
				<ErrorAlert />
			</Box>
			<Box id='successBoxPr' style={{ display: 'none' }}>
				<SuccessAlert />
			</Box>
		</>
	);
}

export default PersonList;
