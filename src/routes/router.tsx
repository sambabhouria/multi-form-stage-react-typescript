
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormStep1 } from '../pages/FormStep1/intex'
import { FormStep2 } from '../pages/FormStep2/intex'
import { FormStep3 } from '../pages/FormStep3/intex'
import {FormStep4} from '../pages/FormStep4/intex'

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<FormStep1 />} />
          <Route path="/step2" element={<FormStep2 />} />
          <Route path="/step3" element={<FormStep3 />} />
          <Route path="/step4" element={<FormStep4 />} />
        </Routes>
      </BrowserRouter>
    )
}
