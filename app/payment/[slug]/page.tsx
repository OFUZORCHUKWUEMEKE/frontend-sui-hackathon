"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

const PaymentForm = () => {
    const params = useParams();
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
    });
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);
    console.log(params.slug);

    const validateCard = (number: number) => {
        // return /^[0-9]{16}$/.test(number.replace(/\s/g, ''));
    };

    const validateExpiry = (date: string) => {
        return /^(0[1-9]|1[0-2])\/([0-9]{4})$/.test(date);
    };

    const validateCVV = (cvv: number) => {
        // return /^[0-9]{3,4}$/.test(cvv);
    };

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];

        for (let i = 0; i < match.length; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'cardNumber') {
            formattedValue = formatCardNumber(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));

        // if (errors[name]) {
        //   setErrors(prev => ({
        //     ...prev,
        //     [name]: ''
        //   }));
        // }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newErrors = {};
        if (Object.keys(newErrors).length === 0) {
            console.log('Payment form submitted:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className=''>
            <div className='py-2 w-4/5 mx-auto'>
                <h2 className='text-2xl font-bold text-white'>Fourier</h2>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 font-['Satoshi'] flex justify-center items-center">
                <Card className="w-full max-w-md mx-auto shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-t-lg">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <CreditCard className="h-6 w-6" />
                            Payment Details
                        </CardTitle>
                        <p className="text-blue-100 mt-2">Enter your payment information securely</p>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
                  ${focusedField === 'name' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}
                `}
                                    value={formData.name}
                                    onChange={handleInputChange}

                                    onBlur={() => setFocusedField(null)}
                                    placeholder="John Doe"
                                />
                                {/* {errors.name && <p className="text-red-500 text-sm flex items-center gap-1">{errors.name}</p>} */}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="cardNumber">
                                    {params.slug}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
                    ${focusedField === 'cardNumber' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}
                  `}
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        //   onFocus={() => setFocusedField('cardNumber')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="1234 5678 9012 3456"
                                    //   maxLength="19"
                                    />
                                    {/* {formData.cardNumber && !errors.cardNumber && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 h-5 w-5" />
                )} */}
                                </div>
                                {/* {errors.cardNumber && <p className="text-red-500 text-sm flex items-center gap-1">{errors.cardNumber}</p>} */}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="expiryDate">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
                    ${focusedField === 'expiryDate' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}
                  `}
                                        value={formData.expiryDate}
                                        onChange={handleInputChange}
                                        //   onFocus={() => setFocusedField('expiryDate')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="MM/YYYY"
                                    />
                                    {/* {errors.expiryDate && <p className="text-red-500 text-sm flex items-center gap-1">{errors.expiryDate}</p>} */}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="cvv">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
                    ${focusedField === 'cvv' ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}
                   
                  `}
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="123"
                                    //   maxLength="4"
                                    />
                                    {/* {errors.cvv && <p className="text-red-500 text-sm flex items-center gap-1">{errors.cvv}</p>} */}
                                </div>
                            </div>

                            <Alert className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                                <Lock className="h-4 w-4 text-emerald-600" />
                                <AlertTitle className="text-emerald-800">Secure Payment</AlertTitle>
                                <AlertDescription className="text-emerald-600">
                                    Your payment information is encrypted and secure
                                </AlertDescription>
                            </Alert>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-6 rounded-lg 
                        font-medium text-lg hover:from-blue-700 hover:to-violet-700 
                        transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                        shadow-lg hover:shadow-xl"
                            >
                                Pay Now
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>

    );
};

export default PaymentForm;