const readVendor = async (req, res) => {
    const vendor = await req.context.models.vendor.findAll(
    );
    return res.send(vendor);
};

const addVendor = async (req, res) => {
    const {vendor_name, vendor_desc} = req.body;
    const vendor = await req.context.models.vendor.create({
        vendor_name : vendor_name,
        vendor_desc : vendor_desc
    });
    return res.send(vendor);
};

const editVendor = async (req, res) => {
    const {vendor_desc} = req.body;
    const vendor =  await req.context.models.vendor.update({    
        
        vendor_desc : vendor_desc
     }, {
        where: { vendor_name: req.params.vendor_name }
          });
        return res.sendStatus(200);
  };

  const deleteVendor = async (req, res) => {
    const vendor = await req.context.models.vendor.destroy({
      where: { vendor_name: req.params.vendor_name },
    });
  
    return res.send(true);
  };

export default {
    readVendor,
    addVendor,
    editVendor,
    deleteVendor
}