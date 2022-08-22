import React from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function useMerchantAuth(shouldHandleNavigation) {
	const isMerchant = useSelector(s => s.user.type === 'merchant');
    const navigate = useNavigate();

	useEffect(() => {
		if(isMerchant === false && shouldHandleNavigation) navigate('/merchant/login', { replace: true });
	}, [isMerchant])

	return isMerchant;
}