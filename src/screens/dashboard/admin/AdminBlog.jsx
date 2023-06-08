import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGlobalContext } from '../../../context'
import { AdminBlogTable } from '../../../components'
import { adminFetchBlogItems } from '../../../services/actions/admin.actions'


const AdminBlog = () => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalContext()
    const { blogItems } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(adminFetchBlogItems())
    }, [])

    console.log(blogItems)

    return (
        <div className='pl-4 pr-4 pb-10 md:px-8 mt-20 flex flex-wrap justify-between items-start w-full'>
            <div className="flex w-full justify-end">
                <button
                    type="button"
                    onClick={() => updateModals({ showAdminAddBlogModal: true })}
                    className="bg-primary rounded text-white text-[12px] py-2 px-6 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                >
                    Add Item
                </button>
            </div>

            <AdminBlogTable
                data={blogItems}
            />
        </div>
    )
}

export default AdminBlog