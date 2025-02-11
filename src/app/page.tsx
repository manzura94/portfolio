import Header from '@/components/Header';

export default function Home() {
    return (
        <div className='flex flex-col justify-between items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
            <div className='flex justify-between w-full max-w-6xl'>
                <Header />
                <main className='flex gap-10 w-1/2'>
                    <div className='flex gap-4 items-center flex-col sm:flex-row'>main body</div>
                </main>
            </div>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>footer</footer>
        </div>
    );
}
