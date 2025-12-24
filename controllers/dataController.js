import adminModel from '../models/adminModel.js'

//get login user details
export async function admindashboard(request,response){
    try {
        const user = await adminModel.fetchGeneral();

        return response.json({
            message : 'user details',
            data : user,
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : "Something is wrong",
            error : true,
            success : false
        })
    }
}