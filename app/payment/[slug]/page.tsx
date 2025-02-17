"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js'
import { Skeleton } from "@/components/ui/skeleton"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Payment = () => {
    interface PaymentData {
        address: string;
        agent_id: string;
        amount: number;
        chains: string[];
        code: string;
        created_at: string;
        details: object;
        id: string;
        payment_description: string;
        status: string;
        title: string;
        token_types: string[];
        updated_at: string;
        user_id: string;
    }

    const params = useParams();

    const [data, setData] = useState<PaymentData | any>();
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({});

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    useEffect(() => {
        fetchPayment()
    }, [])
    const supabase = createClient('https://gowfvrwxcjffdazpttem.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvd2Z2cnd4Y2pmZmRhenB0dGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4OTA1MDIsImV4cCI6MjA1MzQ2NjUwMn0.NVnewfiEh6gKCbERp1sKUFXGmSHhUMV2e-1GIoHe8Mw")

    const fetchPayment = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase.from("payments").select("*").eq('code', params.slug).limit(1)
                .single()
            console.log(data)
            setData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setData(data)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Fourier</h1>
                    <Button variant="ghost" size="icon" onClick={() => document.documentElement.classList.toggle("dark")}>
                        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </header>
            <div className=" font-['Satoshi'] min-h-screen flex justify-center items-center">
                <Card className="w-[95%] min-h-[80vh] md:w-full max-w-md mx-auto shadow-xl border-none">
                    <CardHeader className="bg-black text-white rounded-t-lg">
                        <div className=' flex  justify-between'>
                            <CardTitle className="flex items-center gap-3">
                                <div className='space-y-3 text-md '>
                                    {loading ? (
                                        <Skeleton className="h-4 w-[250px]" />
                                    ) : data?.title}
                                    <p className="text-gray-300 text-sm">Enter your payment information securely</p>
                                </div>
                            </CardTitle>
                            <h2 className='font-bold font-mono text-2xl'>{data?.amount}USDC</h2>
                        </div>
                        {/* <h2 className='font-bold'>{data?.amount}USDC</h2> */}
                    </CardHeader>
                    <CardContent className="p-6">
                        {loading ? (
                            <div className='py-4'>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {Object.keys(data?.details || {}).map((key) =>
                                    data?.details[key] === "true" ? (
                                        <div key={key}>
                                            <label className="block text-sm font-medium capitalize">
                                                {key}
                                            </label>
                                            <input
                                                type="text"
                                                name={key}
                                                // value={formData[key] || ""}
                                                onChange={handleChange}
                                                className="mt-1 p-2 border rounded w-full"
                                                required
                                            />
                                        </div>
                                    ) : null
                                )}
                                <Alert className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                                    <Lock className="h-4 w-4 text-emerald-600" />
                                    <AlertTitle className="text-emerald-800">Secure Payment</AlertTitle>
                                    <AlertDescription className="text-emerald-600">
                                        Your payment information is encrypted and secure
                                    </AlertDescription>
                                </Alert>
                                <button type='submit' className='w-full bg-black text-white py-4 px-6 rounded-lg 
                        font-medium text-lg hover:from-blue-700 hover:to-violet-700 
                        transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                        shadow-lg hover:shadow-xl'>
                                    Pay Now
                                </button>
                            </form>
                        )
                        }
                    </CardContent >
                </Card >
            </div >
        </div >
    );
};

export default Payment;