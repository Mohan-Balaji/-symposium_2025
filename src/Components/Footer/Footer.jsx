export default function Footer() {
    return (
        <footer className="bg-white/10 backdrop-blur-lg shadow-2xl mb-12 font-[Remaining] text-3xl py-7">
            <div className="mx-auto w-full max-w-screen-xl p-4 text-3xl">
                <div className="md:flex md:justify-between flex-wrap">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <a href="/" className="flex justify-center md:justify-start items-center">
                            <span className="self-center text-4xl md:text-4xl font-[Lato] whitespace-nowrap dark:text-white  py-1">Avinyaa</span>
                        </a>
                        <a href="https://maps.app.goo.gl/Nwi4yP4W5kM6im149" target="_blank" className="flex justify-center md:justify-start items-center">
                            <p className="mb-4  py-3  text-gray-500 dark:text-gray-400 font-medium text-1xl sm:text-3xl">
                                R.M.D. Engineering College, <br />
                                Kavaraipettai, <br />
                                Thiruvallur District, Tamil Nadu <br />
                            </p>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="mb-4 font-semibold text-gray-900 uppercase dark:text-white text-1xl sm:text-3xl px-11">Faculty Coordinators</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Mrs. Remya Rose, Assistant Professor</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Mrs. Remya Rose, Assistant Professor</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-4 font-semibold text-gray-900 uppercase dark:text-white text-1xl sm:text-3xl px-11 md:text-center">Students Coordinators</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium md:text-center">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Abishek-President</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Divya Sri-vice President </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 font-semibold text-gray-900 uppercase dark:text-white text-1xl  sm:text-3xl  px-16 md:text-end">Follow Us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium items-end md:text-end">
                                <li className="mb-2 md-text-left md-text-left">
                                    <a href="#" className="hover:underline px-16">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline px-16">WhatsApp&nbsp;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-200" />
                <div className=" text-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between text-center">
                    <span className=" text-gray-500 dark:text-gray-400">© 2025 Avinyaa. All Rights Reserved.</span>
                    <a className=" text-gray-500 dark:text-gray-400">queries: avinyaa@rmd.ac.in</a>
                </div>
            </div>
        </footer>
    );
}
