import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDevMode } from '../store/store';
import { useState } from 'react';

export default function Navbar() {
	const isDevMode = useSelector((state: any) => state.devMode.isDevMode);
	const dispatch = useDispatch();

	const handleMode = () => {
		dispatch(toggleDevMode());
	};
	return (
		<Box sx={{ flexGrow: 1, }}>
			<AppBar position='static' color='info'>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Button onClick={handleMode} color='inherit'>
						{!isDevMode ? 'Dev Mode' : 'User Mode'}
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
