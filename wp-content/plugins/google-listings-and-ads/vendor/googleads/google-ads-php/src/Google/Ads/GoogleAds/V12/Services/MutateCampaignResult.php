<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v12/services/campaign_service.proto

namespace Google\Ads\GoogleAds\V12\Services;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The result for the campaign mutate.
 *
 * Generated from protobuf message <code>google.ads.googleads.v12.services.MutateCampaignResult</code>
 */
class MutateCampaignResult extends \Google\Protobuf\Internal\Message
{
    /**
     * Returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1 [(.google.api.resource_reference) = {</code>
     */
    protected $resource_name = '';
    /**
     * The mutated campaign with only mutable fields after mutate. The field will
     * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v12.resources.Campaign campaign = 2;</code>
     */
    protected $campaign = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $resource_name
     *           Returned for successful operations.
     *     @type \Google\Ads\GoogleAds\V12\Resources\Campaign $campaign
     *           The mutated campaign with only mutable fields after mutate. The field will
     *           only be returned when response_content_type is set to "MUTABLE_RESOURCE".
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V12\Services\CampaignService::initOnce();
        parent::__construct($data);
    }

    /**
     * Returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1 [(.google.api.resource_reference) = {</code>
     * @return string
     */
    public function getResourceName()
    {
        return $this->resource_name;
    }

    /**
     * Returned for successful operations.
     *
     * Generated from protobuf field <code>string resource_name = 1 [(.google.api.resource_reference) = {</code>
     * @param string $var
     * @return $this
     */
    public function setResourceName($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource_name = $var;

        return $this;
    }

    /**
     * The mutated campaign with only mutable fields after mutate. The field will
     * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v12.resources.Campaign campaign = 2;</code>
     * @return \Google\Ads\GoogleAds\V12\Resources\Campaign|null
     */
    public function getCampaign()
    {
        return $this->campaign;
    }

    public function hasCampaign()
    {
        return isset($this->campaign);
    }

    public function clearCampaign()
    {
        unset($this->campaign);
    }

    /**
     * The mutated campaign with only mutable fields after mutate. The field will
     * only be returned when response_content_type is set to "MUTABLE_RESOURCE".
     *
     * Generated from protobuf field <code>.google.ads.googleads.v12.resources.Campaign campaign = 2;</code>
     * @param \Google\Ads\GoogleAds\V12\Resources\Campaign $var
     * @return $this
     */
    public function setCampaign($var)
    {
        GPBUtil::checkMessage($var, \Google\Ads\GoogleAds\V12\Resources\Campaign::class);
        $this->campaign = $var;

        return $this;
    }

}

