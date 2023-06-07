import { useSelector } from 'react-redux'
import React, { useEffect, useReducer } from 'react'

import { appUseItems, blogItems } from '../../data'
import { Blob1, Phone1, Phone2 } from '../../assets'
import { BlogCard, DesktopNavbar, DownloadAppSection, Footer, HeaderText, LinkIconButton, ImageButton, LogoText, MobileNavbar } from '../../components'


const Blog = () => {
	const { blog } = useSelector(state => state.user)

	const [config, updateConfig] = useReducer((prev, next) => {
		return { ...prev, ...next }
	}, {
		currentStep: 1, showMobileNav: true
	})

	useEffect(() => {
		window.addEventListener('DOMContentLoaded', () => {
			if (window.innerWidth <= 768) {
				updateConfig({ showMobileNav: true })
			} else {
				updateConfig({ showMobileNav: false })
			}
		})

		return () => {
			window.removeEventListener('resize', () => { })
		}
	}, [])

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 768) {
				updateConfig({ showMobileNav: true })
			} else {
				updateConfig({ showMobileNav: false })
			}
		})
	}, [window.innerWidth])


	return (
		<main className=''>
			<MobileNavbar />
			<DesktopNavbar />

			<section className="h-[20%] px-6 -mt-[100px] md:-mt-0 pt-4 md:pt-0">
				<img
					alt="blog-img"
					src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					className='w-full h-full'
				/>
			</section>

			<section className="px-6 lg:px-20 flex flex-col w-full mt-10 mb-5 lg:mb-0">
				<div className="flex justify-between">
					<p className='bg-lime-50 text-[12px] py-[2px] rounded'>{blog?.author}</p>

					<p className='text-[12px]'>{blog?.date}</p>
				</div>

				<div className='-space-y-2'>
					<HeaderText
						text={blog?.title}
						color={'text-primary'}
						classes={'text-[20px] font-bold font-lato'}
					/>

					<p className='text-[14px]'>{blog?.intro}</p>
				</div>

				<div className='mt-4'>
					<p className='text-[16px]'>{blog?.description}</p>
				</div>
			</section>

			{/* FOOTER */}
			<Footer />
		</main>
	)
}


export default Blog