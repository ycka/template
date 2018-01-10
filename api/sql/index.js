module.exports.user = (index,article)=>{
    user={
        key:`select * from sa_user limit ${index},${article}`,
        all:'select * from sa_user',
    }
    return user;
}
module.exports.industryList = ()=>{
    industryList=`Select industry_no as id,industry_name as name,p_industry_no as parentId
    From securities_industry
    where p_industry_no != '008'
    GROUP BY industry_no`
    return industryList;
}
// module.exports.industry = ()=>{
//     industryList=`Select industry_no as value,industry_name as label
//     From securities_industry where p_industry_no = '0'
//     ORDER BY industry_no`
//     return industryList;
// }

module.exports.industry = ()=>{
    industryList=`select zh_sort_name as label,company_code as value from sa_company_compare where person_id='2'`
    return industryList;
}

module.exports.travellist = (data)=>{
    //data.endTime = String(data.endTime);
    data.endTime = JSON.stringify(data.endTime);
    data.cantJoinTime = JSON.stringify(data.cantJoinTime);
    data.beginTime = JSON.stringify(data.beginTime);
    
    travellist=`insert into travellist values ("${data.id}","${data.joinMax}","${data.clicks}","${data.content}","${data.travelPic}","${data.endTime}","${data.joinNum}","${data.joinUser}","${data.title}","${data.releaseUsername}","${data.releaseUserId}","${data.cantJoinTime}","${data.beginTime}","${data.releaseTime}","${data.destination}","${data.objectId}","${data.createdAt}","${data.updatedAt}")`
    console.log(travellist)
    return travellist;
}

module.exports.punishType = ()=>{
    industryList=`select
    t.id as id,
    t.parent_id as parentId,
    t.level as level,
    t.violate_class_name as label,
    t.violate_class_value as value
    from violate_class t
    order by t.sort`
    return industryList;
}