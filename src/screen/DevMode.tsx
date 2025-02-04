import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setExcelData } from '../store/store';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/material/Input';
import { toTitleCase } from '../util/caseConverter';

export default function DevMode() {
	const [data, setData] = useState<any>({});
	const jsonData = useSelector((state: any) => state.excelData.excelDataArray);

	const dispatch = useDispatch();

	useEffect(() => {
		setData(jsonData);
	}, [jsonData]);

	const handleChange = (
		category: string,
		key: string,
		subKey: string | null,
		value: string | number
	) => {
		setData((prevData: any) => ({
			...prevData,
			[category]: {
				...prevData[category],
				[key]: subKey ? { ...prevData[category][key], [subKey]: value } : value
			}
		}));
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const data = new Uint8Array(e.target?.result as ArrayBuffer);
			const workbook = XLSX.read(data, { type: 'array' });

			const sheetName = workbook.SheetNames[0]; // Read first sheet
			const sheet = workbook.Sheets[sheetName];

			const json: any = XLSX.utils.sheet_to_json(sheet);
			console.log('JSON Output:', json); // Print in console
			setData(json); // Store for UI display if needed
			localStorage.setItem('excelData', JSON.stringify(json));
			dispatch(setExcelData(json));
		};

		reader.readAsArrayBuffer(file);
	};

	const handleClearAll = () => {
		dispatch(setExcelData([]));
		localStorage.removeItem('excelData');
		// setData({});
	};
	const handleSave = () => {
		dispatch(setExcelData(data));
		localStorage.setItem('excelData', JSON.stringify(data));
	};
	return (
		<Box>
			{/* <Box
				sx={{
					p: 3,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around'
				}}
			>
				<Box>
					<Typography variant='h6' gutterBottom>
						Upload Excel File
					</Typography>
					<Button variant='contained' component='label' color='success'>
						Choose File
						<input
							type='file'
							accept='.xlsx, .xls'
							hidden
							onChange={handleFileUpload}
						/>
					</Button>
				</Box>
				<Box sx={{ alignContent: 'end' }}>
					<Button variant='contained' component='label' color='error' onClick={handleClearAll}>
						Clear All
					</Button>
				</Box>
			</Box> */}
			<Box
				sx={{
					p: 3,
					mx: 'auto',
					display: 'flex',
					flexDirection: 'column',
					gap: 2
				}}
			>
				<Typography variant='h5' sx={{ mb: 2 }}>
					Edit JSON Data
				</Typography>

				{/* Editable Fields */}

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
						gap: 3 // Spacing between boxes
					}}
				>
					{Object.entries(data).map(
						(
							[category, values] // Ensure values is an object
						) => (
							<Box
								key={category}
								sx={{
									border: '1px solid gray',
									p: 2,
									borderRadius: 2,
									maxWidth: 500
								}}
							>
								<Typography variant='h6'>{toTitleCase(category)}</Typography>
								{Object.entries(values ?? {}).map(
									(
										[key, subValues] // Fix: Ensure values is not null
									) =>
										typeof subValues === 'object' && subValues !== null ? ( // Ensure subValues is an object
											<Box key={key} sx={{ pl: 2 }}>
												<Typography variant='subtitle1'>
													{toTitleCase(key)}
												</Typography>
												{Object.entries(subValues ?? {}).map(
													([subKey, subValue]) => (
														<Box
															key={subKey}
															sx={{
																display: 'flex',
																alignItems: 'center',
																gap: 1,
																mb: 1
															}}
														>
															<Typography sx={{ minWidth: 100 }}>
																{toTitleCase(subKey)}:
															</Typography>
															<Input
																value={subValue}
																onChange={(e) =>
																	handleChange(
																		category,
																		key,
																		subKey,
																		e.target.value
																	)
																}
																sx={{ flex: 1 }}
																type='string'
															/>
														</Box>
													)
												)}
											</Box>
										) : (
											<Box
												key={key}
												sx={{
													display: 'flex',
													alignItems: 'center',
													gap: 1,
													mt: 1
												}}
											>
												<Typography sx={{ minWidth: 120 }}>{toTitleCase(key)}:</Typography>
												<Input
													value={subValues}
													onChange={(e) =>
														handleChange(category, key, null, e.target.value)
													}
													sx={{ flex: 1 }}
													type='text'
												/>
											</Box>
										)
								)}
							</Box>
						)
					)}
				</Box>
				<Button variant='contained' sx={{ mt: 2 }} onClick={handleSave}>
					Save Changes
				</Button>
			</Box>
			{jsonData && (
				<Box sx={{ mt: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
					<Typography variant='body1'>JSON Output:</Typography>
					<pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
						{JSON.stringify(jsonData, null, 2)}
					</pre>
				</Box>
			)}
		</Box>
	);
}
