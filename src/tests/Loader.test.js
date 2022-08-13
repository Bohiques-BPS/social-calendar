import React from "react";
import { render, screen } from '@testing-library/react'
import Loader from '../components/Loader'

test('test: render main', ()=>{
    render(<Loader />)
})