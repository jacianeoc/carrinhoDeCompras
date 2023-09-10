exports.fallback=(req, res) =>{
    res.status(404).json({erros:[{location:req.path, msg: 'NOT FOUND', param:null}]});
}