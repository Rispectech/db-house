import React from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function useAdminAuth (shouldHandleNavigation) {
	const isAdmin = useSelector(s => s.user.type === 'admin');
    const navigate = useNavigate();
	
	useEffect(() => {
		if(isAdmin === false && shouldHandleNavigation) navigate('/admin/login', { replace: true });
	}, [isAdmin])

	return isAdmin;
}