<template>
    <div class="content-box">
        <div>
            <breadcrumb />
            <inputDisabled :inline="inline" :form="form" :formLabel="formLabel" />
        </div>
    </div>
</template>
<script>
import inputDisabled from '@/components/input/input-disabled.vue';
import breadcrumb from '@/components/breadcrumb/index.vue';
export default {
    name: 'charging-vehicle',
    components: {
        inputDisabled,
        breadcrumb
    },
    data() {
        return {
            inline: true,
            form: {
                city: '', //所属城市
                zone: '', //区
                operatingCompany: '', //运营公司
                marketingCompany: '', //营销公司
                powerStation: '', //电站
                orderStatus: [], //订单状态
                powerStationType: '', //电站类型
                publicScheme: '', //电站类型一级
                secondaryPowerStation: '', //电站类型二级
                electricitySellingMode: '', //售电模式
                includeTestStation: '', //包含测试站
                customerTyp: '', //客户类型
                debitAccountType: '', //扣费账户类型
                orderType: '', //订单类型
                freeOrder: '', //是否免费订单
                chargingStartTime: '', //充电开始时间
                startTime: '', //开始时间
                endTime: '', //结束时间
                qualityStation: '', //是否优质站
                orderNumberFiltering: '', //按订单编号过滤
                keyword: '', //关键字(支持模糊查询)
                equipmentAccessMode: '', //设备接入方式
                startTimeSort: '', //按充电开始时间排序
                publicScheme: '', //公共方案-系统默认
                feeDeductionEnterprise: '', //扣费企业
                frameNumber: '', //车架号
                licensePlateNumber: '', //车牌号
                cardNumber: '', //卡号
                deductionAccount: '', //按扣费账户过滤
                order: '', //订单
                powerStationName: '', //按电站名称排序
                plateNumberSort: '' //按车牌号排序
            },
            formLabel: [
                {
                    model: 'operatingCompany',
                    label: '运营公司',
                    placeholder: '运营公司',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'feeDeductionEnterprise',
                    label: '扣费企业',
                    placeholder: '扣费企业',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'powerStation',
                    label: '电站',
                    placeholder: '电站',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'startTime',
                    label: '开始时间',
                    placeholder: '开始时间',
                    type: 'date'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'endTime',
                    label: '结束时间',
                    placeholder: '结束时间',
                    type: 'date'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'keyword',
                    label: '关键字(支持模糊查询)',
                    placeholder: '关键字(支持模糊查询)',
                    type: 'input'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'publicScheme',
                    label: '电站类型一级',
                    placeholder: '电站类型一级',
                    type: 'select',
                    opts: [
                        {
                            value: '驻地站',
                            label: '驻地站'
                        },
                        {
                            value: '公共站',
                            label: '公共站'
                        },
                        {
                            value: '专用站',
                            label: '专用站'
                        },
                        {
                            value: '个人桩',
                            label: '个人桩'
                        },
                        {
                            value: '复用站',
                            label: '复用站'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'secondaryPowerStation',
                    label: '电站二级',
                    placeholder: '电站二级',
                    type: 'select',
                    opts: [
                        {
                            value: '标准公共快充站',
                            label: '标准公共快充站'
                        },
                        {
                            value: '小型公共快充站',
                            label: '小型公共快充站'
                        },
                        {
                            value: '目的地站',
                            label: '目的地站'
                        },
                        {
                            value: '居民小区站',
                            label: '居民小区站'
                        },
                        {
                            value: '园区驻地站',
                            label: '园区驻地站'
                        },
                        {
                            value: '公交专用站',
                            label: '公交专用站'
                        },
                        {
                            value: '非公交专用站',
                            label: '非公交专用站'
                        },
                        {
                            value: '公交复用站',
                            label: '公交复用站'
                        },
                        {
                            value: '非公交复用站',
                            label: '非公交复用站'
                        },
                        {
                            value: '个人共享站',
                            label: '个人共享站'
                        },
                        {
                            value: '未分类',
                            label: '未分类'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'plateNumberSort',
                    label: '按车牌号排序',
                    placeholder: '按车牌号排序',
                    type: 'select',
                    opts: [
                        {
                            value: '按车牌号排序',
                            label: '按车牌号排序'
                        },
                        {
                            value: '按车架号排序',
                            label: '按车架号排序'
                        },
                        {
                            value: '按充电电量排序',
                            label: '按充电电量排序'
                        },
                        {
                            value: '按总费用排序',
                            label: '按总费用排序'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'publicScheme',
                    label: '公共方案-系统默认',
                    placeholder: '公共方案-系统默认',
                    type: 'select',
                    opts: [
                        {
                            value: '公共方案-系统默认',
                            label: '公共方案-系统默认'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                }
            ]
        };
    },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="less" scoped></style>
