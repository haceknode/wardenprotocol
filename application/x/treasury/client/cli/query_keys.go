package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"gitlab.qredo.com/qrdochain/fusionchain/x/treasury/types"
)

var _ = strconv.Itoa(0)

func CmdKeys() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "keys [workspace-id]",
		Short: "Query Keys, optionally by workspace id",
		Args:  cobra.MaximumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			params := &types.QueryKeysRequest{
				Pagination: pageReq,
			}
			if len(args) > 0 {
				workspaceID, err := strconv.ParseUint(args[0], 10, 64)
				if err != nil {
					return err
				}

				params.XWorkspaceId = &types.QueryKeysRequest_WorkspaceId{
					WorkspaceId: workspaceID,
				}
			}

			res, err := queryClient.Keys(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}